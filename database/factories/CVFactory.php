<?php

namespace Database\Factories;

use App\Models\CV;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class CVFactory extends Factory
{
    protected $model = CV::class;

    public function definition()
    {
        return [
            'user_id' => User::factory(),
            'name' => $this->faker->sentence,
            'language' => $this->faker->languageCode,
            'preview_image' => $this->faker->imageUrl(),
            'last_updated' => $this->faker->dateTimeThisMonth(),
            'status' => $this->faker->randomElement(['Active', 'Draft']),
            'resume' => $this->faker->optional()->url,
            'image_url' => $this->faker->optional()->imageUrl(),
            'template' => $this->faker->optional()->word,
            'url' => $this->faker->optional()->url,
        ];
    }
}