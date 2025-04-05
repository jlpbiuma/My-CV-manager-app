<?php

namespace Database\Factories;

use App\Models\CV;
use Illuminate\Database\Eloquent\Factories\Factory;

class CVFactory extends Factory
{
    protected $model = CV::class;

    public function definition()
    {
        return [
            'user_id' => 1,
            'name' => $this->faker->jobTitle,
            'language' => $this->faker->languageCode,
            'preview_image' => $this->faker->imageUrl(),
            'last_updated' => $this->faker->dateTimeThisMonth(),
            'status' => $this->faker->randomElement(['Active', 'Draft']),
        ];
    }
}