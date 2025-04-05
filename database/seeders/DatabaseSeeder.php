<?php

namespace Database\Seeders;

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

        // Call the ExperienceSeeder
        $this->call(ExperienceSeeder::class);

        // Call the FormacionSeeder
        $this->call(FormacionSeeder::class);

        // Call the EstudiosSeeder
        $this->call(EstudiosSeeder::class);

        // Call the IdiomasSeeder
        $this->call(IdiomasSeeder::class);

        // Call the ProyectsSeeder
        $this->call(ProyectsSeeder::class);

        // Call the CertificationsSeeder
        $this->call(CertificationsSeeder::class);

        // Call the WebSeeder
        $this->call(WebSeeder::class);
    }
}