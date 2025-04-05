<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CV;


class CVSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CV::factory()->count(10)->create([
            'user_id' => 1, // Ensure this matches the user ID created in UserSeeder
            'name' => 'John Doe',
            'language' => 'English',
            'preview_image' => 'https://cdn-icons-png.flaticon.com/512/65/65032.png',
            'last_updated' => now(),
            'status' => 'active',
        ]);
    }
}
