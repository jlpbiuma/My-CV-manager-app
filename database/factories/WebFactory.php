<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Web;
use App\Models\User;
use App\Models\CV;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Web>
 */
class WebFactory extends Factory
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
            'type' => $this->faker->randomElement(['LinkedIn', 'GitHub', 'WhatsApp', 'Portfolio']),
            'url' => $this->faker->url,
        ];
    }
}
