<?php

namespace App\Http\Controllers;

use Goutte\Client;
use Illuminate\Http\Request;
use JetBrains\PhpStorm\NoReturn;

class ScraperController extends Controller
{
    public array $groups = [];
    public array $days = [];
    public array $class = [];
    public array $hours = [];
    public array $classGroup = [];
    public array $objects = [];


    public function scraper()
    {
        $client = new Client();
        //temp link
        $url = 'http://www.plan.pwsz.legnica.edu.pl/checkSpecjalnoscStac.php?specjalnosc=s1D';
        $page = $client->request('GET', $url);

        //select table
        $table = $page->filter('table')->filter('tr')->each(function ($tr, $i) {
            return $tr->filter('td')->each(function ($td, $i) {
                if ($td->text() !== '') {
                    return $td->text();
                }
            });
        });

        //select groups
        foreach ($table[0] as $group) {
            if ($group !== null) {
                $this->groups[] = $group;
                $this->objects[]['group'] = $group;
            }
        }

        //select days
        foreach ($table as $item) {
            if (count($item) === 1) {
                $this->days[] = $item;
            }
        }
        //count groups and days
        $countGroups = count($this->groups);
        $countDays = count($this->days);

        //select class
        foreach ($table as $item) {
            if (count($item) === (3 * $countGroups) + 1) {
                $this->class[] = $item;
            }
        }
        //select class divide by groups
        for ($x = 0; $x < $countGroups; $x++) {
            $offset = 1;
            $length = 3;

            if ($x > 0){
                $offset += 3;
                $length *= 2;
            }

            foreach ($this->class as $class) {
                $this->classGroup[$x][] = array_slice($class, $offset, $length);
            }
        }

        //select hours
        foreach ($this->class as $class) {
            $this->hours[] = $class[0];
        }

        //count hours
        $countHours = count($this->hours);

        foreach ($this->hours as $key => $hour) {
           // $this->hours[$key]['class'][] = $this->classGroup[0];
        }

        //marge hours in days
        for ($x = 0; $x < $countDays; $x++) {
            for ($i = 0; $i < 7; $i++) {
                $this->days[$x]['hours'][] = $this->hours[$i];
            }
        }

        //marge days in objects
        for ($x = 0; $x < $countGroups; $x++) {
            $this->objects[$x]['days'] = $this->days;
        }

        dd($this->objects);
       // return View::make('scraper')->with('table', $table);
    }

}
