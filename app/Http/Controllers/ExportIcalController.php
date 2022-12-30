<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mockery\Exception;

class ExportIcalController extends Controller
{
    private ExportIcalInterface $exportIcal;
    private ScraperInterface $scraper;

    public function __construct(ScraperInterface $scraper, ExportIcalInterface $exportIcal)
    {
        $this->exportIcal = $exportIcal;
        $this->scraper = $scraper;
    }

    public function export(Request $request): \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
    {
        try {
            $url = $request->input('link');

            $formatSchedule = $this->scraper->getSchedule($url);

            $calendar = $this->exportIcal->getIcal($formatSchedule);

            return response($calendar);
        } catch (Exception $e) {
            return response($e->getMessage());
        }
    }
}
