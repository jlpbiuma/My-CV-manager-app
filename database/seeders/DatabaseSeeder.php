<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Call the UserSeeder first
        $this->call(UserSeeder::class);

        // Call the CVSeeder
        $this->call(CVSeeder::class);

        // Call the ActivitySeeder
        $this->call(ActivitySeeder::class);
    }
}