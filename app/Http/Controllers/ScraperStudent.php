<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mockery\Exception;

class ScraperStudent extends Controller
{
    private ScraperStudentInterface $studentScraper;

    public function __construct(ScraperStudentInterface $studentScraper)
    {
        $this->studentScraper = $studentScraper;
    }

    public function scrapStudentSchedule(): \Illuminate\Http\JsonResponse
    {
        $url = 'http://www.plan.collegiumwitelona.pl/checkSpecjalnoscStac.php?specjalnosc=s1INF';

        try {
            return response()->json($this->studentScraper->getSchedule($url));
        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }
}
