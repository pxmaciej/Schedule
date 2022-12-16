<?php

use App\Http\Controllers\ExportIcalController;
use App\Http\Controllers\ScraperStudent;
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
//na tego routa nie nic nie puszczać
Route::get('/scraper', [ScraperStudent::class, 'scrapStudentSchedule'])->name('scraper');

//request->http->'http://www.plan.pwsz.legnica.edu.pl/checkSpecjalnoscStac.php?specjalnosc=s1D'
Route::post('/scrapStudent', [ScraperStudent::class, 'scrapStudentSchedule']);

//request->http->'http://www.plan.pwsz.legnica.edu.pl/checkSpecjalnoscStac.php?specjalnosc=s1D'
Route::post('/export', [ExportIcalController::class, 'export']);

Route::get('/token', function () {
    return csrf_token();
});
