<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mockery\Exception;

class Scraper extends Controller
{
    private ScraperInterface $studentScraper;

    public function __construct(ScraperInterface $studentScraper)
    {
        $this->studentScraper = $studentScraper;
    }

    public function scrapSchedule(Request $request): \Illuminate\Http\JsonResponse
    {
        $url = $request->input('link');
        try {
            return response()->json($this->studentScraper->getSchedule($url));
        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }
}
