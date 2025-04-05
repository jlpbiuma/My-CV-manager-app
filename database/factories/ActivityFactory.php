<?php

namespace Database\Factories;

use App\Models\Activity;
use Illuminate\Database\Eloquent\Factories\Factory;

class ActivityFactory extends Factory
{
    protected $model = Activity::class;

    public function definition()
    {
        return [
            'user_id' => 1,
            'type' => $this->faker->randomElement(['update', 'create', 'download']),
            'description' => $this->faker->sentence,
            'timestamp' => $this->faker->dateTimeThisMonth(),
        ];
    }
}