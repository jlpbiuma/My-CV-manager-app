<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Experience;

class ExperienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 10 experiences for the first user
        Experience::factory()->count(10)->create([
            'user_id' => 1, // Assign to user with ID 1
            'cv_id' => 1, // Assign to CV with ID 1
            'title' => 'Software Engineer',
            'company' => 'Tech Company',
            'description' => 'Developed various software applications.',
            'start_date' => now()->subYears(2),
            'end_date' => now()->subYear(),
        ]);
    }
}
