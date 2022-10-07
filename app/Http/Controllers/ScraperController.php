<?php

namespace App\Http\Controllers;

use Goutte\Client;
use Illuminate\Http\Request;
use function PHPUnit\Framework\isEmpty;

class ScraperController extends Controller
{
    public $groups = [];
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

        $json = json_decode(json_encode($table, JSON_PRETTY_PRINT));


        foreach ($json[0] as $index) {
            if ($index !== null) {
                $groups[] = $index;
            }
        }


        dd($groups);

        return $json;
    }

}
