<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Estudios;

class EstudiosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 10 estudios for the first user and CV
        Estudios::factory()->count(10)->create([
            'user_id' => 1, // Assign to user with ID 1
            'cv_id' => 1, // Assign to CV with ID 1
        ]);
    }
}
