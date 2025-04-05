<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Certifications;
use App\Models\User;
use App\Models\CV;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Certifications>
 */
class CertificationsFactory extends Factory
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
            'name' => $this->faker->sentence,
            'issuing_organization' => $this->faker->company,
            'issue_date' => $this->faker->date(),
            'expiration_date' => $this->faker->optional()->date(),
            'credential_id' => $this->faker->optional()->uuid,
            'description' => $this->faker->paragraph,
        ];
    }
}
