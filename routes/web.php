<?php

use App\Http\Controllers\ExportIcalController;
use App\Http\Controllers\Scraper;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('home');
});

Route::get('/welcome', function () {
    return view('welcome');
});

//request->http->'http://www.plan.pwsz.legnica.edu.pl/checkSpecjalnoscStac.php?specjalnosc=s1D'
Route::post('/scrap', [Scraper::class, 'scrapSchedule']);

//request->http->'http://www.plan.pwsz.legnica.edu.pl/checkSpecjalnoscStac.php?specjalnosc=s1D'
Route::post('/export', [ExportIcalController::class, 'export']);

Route::get('/token', function () {
    return csrf_token();
});
