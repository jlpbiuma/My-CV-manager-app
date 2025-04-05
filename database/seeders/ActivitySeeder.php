<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Activity;

class ActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Activity::factory()->create([
            'user_id' => 1, // Ensure this matches the user ID created in UserSeeder
            'type' => 'update',
            'description' => 'You updated Software Engineer CV',
            'timestamp' => '2 days ago',
        ]);
    }
}
