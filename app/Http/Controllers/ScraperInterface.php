<?php

namespace App\Http\Controllers;

interface ScraperInterface
{
    public function getSchedule(string $url);
}
