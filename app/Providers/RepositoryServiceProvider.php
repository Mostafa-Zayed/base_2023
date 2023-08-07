<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind('App\\Interfaces\\UserInterface','App\\Repositories\\UserRepository');

        $this->app->bind('App\\Interfaces\AdminInterface','App\\Repositories\\AdminReposiotry');
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
