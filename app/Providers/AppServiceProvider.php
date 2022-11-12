<?php

namespace App\Providers;

use App\Service\StudentDataScrapService;
use Illuminate\Support\ServiceProvider;
use App\Http\Controllers\ScraperStudentInterface;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register(): void
    {
        $this->app->bind(ScraperStudentInterface::class, function () {
            return new StudentDataScrapService();
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
