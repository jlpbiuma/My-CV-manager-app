<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Idiomas;
use App\Models\User;
use App\Models\CV;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Idiomas>
 */
class IdiomasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'cv_id' => CV::factory(),
            'language' => $this->faker->languageCode,
            'proficiency' => $this->faker->randomElement(['Beginner', 'Intermediate', 'Advanced']),
        ];
    }
}
