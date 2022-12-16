<?php

namespace App\Http\Controllers;

use DateTime;
use Illuminate\Http\Request;
use Spatie\CalendarLinks;
use Spatie\IcalendarGenerator\Components\Calendar;
use Spatie\IcalendarGenerator\Components\Event;


class ExportIcalController extends Controller
{
    private ScraperStudentInterface $studentScraper;

    public function __construct(ScraperStudentInterface $studentScraper)
    {
        $this->studentScraper = $studentScraper;
    }

    public function export(Request $request): \Illuminate\Http\JsonResponse
    {
        $url = $request->input('link');
        $formatSchedule = $this->studentScraper->getFormatSchedule($url);

        $array = [];

       /* foreach ($formatSchedule as $x => $item) {
            for ($k = 0; $k < count($item)-2; $k++) {
                for ($i = 0; $i < 7; $i++) {
                    $lecture = $item[$k][$i]['lecture'];
                    $startEvent = $item[$k][$i]['startEvent'];
                    $endEvent = $item[$k][$i]['endEvent'];
                    $array[] = Event::create()
                        ->name("$lecture")
                        ->description("$lecture")
                        ->createdAt(new DateTime())
                        ->startsAt(new DateTime("$startEvent"))
                        ->endsAt(new DateTime("$endEvent"));
                }
            }
        }*/

        $ical = Calendar::create('Plan Collegium Legnica')
            ->event($array)->get();

        return response()->json($formatSchedule);
    }
}
