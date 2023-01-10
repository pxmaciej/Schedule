<?php
namespace App\Http\Controllers;

interface ExportIcalInterface
{
    public function getIcal(array $formatSchedule);
}
