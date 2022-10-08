<?php

namespace App\Http\Controllers;

use Goutte\Client;
use Illuminate\Http\Request;

class ScraperController extends Controller
{
    public $groups = [];
    public $days = [];
    public $class = [];

    public function scraper()
    {
        $client = new Client();
        $url = 'http://www.plan.pwsz.legnica.edu.pl/checkSpecjalnoscStac.php?specjalnosc=s1D';
        $page = $client->request('GET', $url);

        $table = $page->filter('table')->filter('tr')->each(function ($tr, $i) {
            return $tr->filter('td')->each(function ($td, $i) {
                if ($td->text() !== '') {
                    return $td->text();
                }
            });
        });

        foreach ($table[0] as $item) {
            if ($item !== null) {
                $this->groups[] = $item;
            }
        }

        $countGroups = count($this->groups);

        foreach ($table as $item) {
            if (count($item) === 1) {
                $this->days[] = $item;
            }

            if (count($item) === (3 * $countGroups) + 1) {
                $this->class[] = $item;
            }
        }


        dd($this->class);
       // return View::make('scraper')->with('table', $table);
    }

}
