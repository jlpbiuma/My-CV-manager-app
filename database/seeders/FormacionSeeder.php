<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Formacion;

class FormacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 10 formacions for the first user and CV
        Formacion::factory()->count(10)->create([
            'user_id' => 1, // Assign to user with ID 1
            'cv_id' => 1, // Assign to CV with ID 1
            'institution' => 'University of Example',
            'degree' => 'Bachelor of Science in Example Studies',
            'description' => 'A comprehensive program covering various aspects of example studies.',
            'start_date' => '2015-09-01',
            'end_date' => '2019-06-01',
        ]);
    }
}
