<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Idiomas;

class IdiomasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 10 idiomas for the first user and CV
        Idiomas::factory()->count(10)->create([
            'user_id' => 1, // Assign to user with ID 1
            'cv_id' => 1, // Assign to CV with ID 1
            'language' => 'English', // Example language
            'proficiency' => 'Advanced', // Example proficiency
        ]);
    }
}
