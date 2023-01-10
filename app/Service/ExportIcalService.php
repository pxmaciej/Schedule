<?php

namespace App\Service;

use App\Http\Controllers\ExportIcalInterface;
use DateTime;
use Spatie\IcalendarGenerator\Components\Calendar;
use Spatie\IcalendarGenerator\Components\Event;

class ExportIcalService implements ExportIcalInterface
{
    public function getIcal($formatSchedule)
    {
        $array = [];

        foreach ($formatSchedule as $item) {
            for ($k = 0; $k < count($item)-2; $k++) {
                for ($i = 0; $i < 7; $i++) {
                    $lecture = $item[$k][$i]['lecture'];
                    $startEvent = $item[$k][$i]['startEvent'];
                    $endEvent = $item[$k][$i]['endEvent'];

                    $array[] = Event::create()
                        ->name("$lecture[0] $lecture[1] $lecture[2]")
                        ->description("$lecture[0] $lecture[1] $lecture[2]")
                        ->createdAt(new DateTime())
                        ->startsAt(new DateTime("$startEvent"))
                        ->endsAt(new DateTime("$endEvent"));
                }
            }
        }

        return Calendar::create('Colegium Witelona')->event($array)->get();
    }
}
