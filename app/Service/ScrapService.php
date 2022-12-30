<?php

namespace App\Service;

use Goutte\Client;
use App\Http\Controllers\ScraperInterface;

class ScrapService implements ScraperInterface
{
    private array $schedule = [];
    //private array $debugarray = [];

    private function selectDataFromTable($url): array
    {
        $client = new Client();

        $page = $client->request('GET', $url);

        return $page->filter('table')->filter('tr')->each(function ($tr, $i) {
            return $tr->filter('td')->each(function ($td, $i) {
                if ($td->text() !== '') {
                    return $td->text();
                }
            });
        });
    }

    private function selectGroups($table): array
    {
        foreach ($table[0] as $group) {
            if ($group !== null) {
                $groups[] = $group;
            }
        }

        return $groups;
    }

    private function selectDays($table): array
    {
        foreach ($table as $item) {
            if (count($item) === 1) {
                $days[] = $item;
            }
        }

        return $days;
    }

    private function selectClasses($table,$groups): array
    {
        $countGroups = $this->countGroups($groups);

        foreach ($table as $item) {
            if (count($item) === (3 * $countGroups) + 1) {
                $class[] = $item;
            }
        }

        return $class;
    }

    private function selectHours($classes): array
    {
        foreach ($classes as $class) {
            $hours[] = $class[0];
        }

        return $hours;
    }

    public function countGroups($groups): int
    {
        return count($groups);
    }

    public function countDays($days): int
    {
        return count($days);
    }

    private function divideClassesByGroups($classes, $groups): array
    {
        $countGroups = $this->countGroups($groups);


        $length = 3;
        $offset = 1;
        //select class divide by groups
        for ($x = 0; $x <= $countGroups; $x++) {

            if($x > 0) {
                $offset = 1 + (3 * $x);
                $length = 3;
            }

            foreach ($classes as $k=>$class) {
                $classesGroups[$x][] = array_slice($class, $offset, $length);
                $this->debugarray[$k] = array_slice($class, $offset, $length);
            }

        }

        return $classesGroups;
    }

  /*  private function createSchedule($groups, $days, $hours, $classGroup): array
    {
        $countGroups = $this->countGroups($groups);

        for ($x = 0; $x < $countGroups; $x++) {
            $this->schedule[$x] = ['group' => $groups[$x]];

            foreach ($days as $k => $day) {
                $this->schedule[$x][$k] = ['day' => $day[0]];

                for ($y = 0; $y<7; $y++) {
                    $hour = $hours[$y];
                    $this->schedule[$x][$k][$y] = ['hour' => $hour];
                    $this->schedule[$x][$k][$y]['lecture'] = $classGroup[$x][$y];
                }
            }
        }
        return $this->schedule;
    }*/

    private function formatSchedule($groups, $days, $hours, $classesGroup): array
    {
        $countGroups = $this->countGroups($groups);

        for ($x = 0; $x < $countGroups; $x++) {
            $this->schedule[$x] = ['group' => $groups[$x]];
            $tmp = 0;
            foreach ($days as $k => $day) {
                $day[0] = substr($day[0], strrpos($day[0], ' ')+1);
                $this->schedule[$x][$k] = ['day' => $day[0]];
                for ($y = 0; $y<7; $y++) {
                    $hourStart = substr($hours[$y],0, strrpos($day[0], '-')-2);
                    $hourEnd = substr($hours[$y],strrpos($day[0], '-')-1);
                    $this->schedule[$x][$k][$y] = ['hourStart' => $hourStart];
                    $this->schedule[$x][$k][$y]['hourEnd'] =  $hourEnd;

                    $this->schedule[$x][$k][$y]['startEvent'] = "$day[0] $hourStart";
                    $this->schedule[$x][$k][$y]['endEvent'] = "$day[0] $hourEnd";
                    $this->schedule[$x][$k][$y]['lecture'] = $classesGroup[$x][$tmp];
                    $tmp++;
                }
            }
        }

        return $this->schedule;
    }

/*    public function getSchedule($url): array
    {
        $table = $this->selectDataFromTable($url);
        $groups = $this->selectGroups($table);
        $days = $this->selectDays($table);
        $classes = $this->selectClasses($table, $groups);
        $hours = $this->selectHours($classes);
        $classesGroups = $this->divideClassesByGroups($classes, $groups);

        return $this->createSchedule($groups, $days, $hours, $classesGroups);
    }*/

    public function getSchedule($url): array
    {
        $table = $this->selectDataFromTable($url);
        $groups = $this->selectGroups($table);
        $days = $this->selectDays($table);
        $classes = $this->selectClasses($table, $groups);
        $hours = $this->selectHours($classes);
        $classesGroups = $this->divideClassesByGroups($classes, $groups);

        return $this->formatSchedule($groups, $days, $hours, $classesGroups);
    }
}
