<?php

namespace App\Providers;

use App\Http\Controllers\ExportIcalInterface;
use App\Service\ExportIcalService;
use App\Service\ScrapService;
use Illuminate\Support\ServiceProvider;
use App\Http\Controllers\ScraperInterface;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register(): void
    {
        $this->app->bind(ScraperInterface::class, function () {
            return new ScrapService();
        });
        $this->app->bind(ExportIcalInterface::class, function () {
            return new ExportIcalService();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
