<?php

namespace App\Http\Controllers;

interface ScraperStudentInterface
{
    public function getSchedule($url);
}
