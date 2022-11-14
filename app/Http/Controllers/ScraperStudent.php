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

    public function scrapStudentSchedule(Request $request): \Illuminate\Http\JsonResponse
    {
        //$url = 'http://www.plan.pwsz.legnica.edu.pl/checkSpecjalnoscStac.php?specjalnosc=s1D';

        try {
            return response()->json($this->studentScraper->getSchedule($request->http));
        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }
}
