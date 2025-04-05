<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Proyects;
use App\Models\User;
use App\Models\CV;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Proyects>
 */
class ProyectsFactory extends Factory
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
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'technologies' => $this->faker->words(3, true),
            'start_date' => $this->faker->date(),
            'end_date' => $this->faker->optional()->date(),
        ];
    }
}
