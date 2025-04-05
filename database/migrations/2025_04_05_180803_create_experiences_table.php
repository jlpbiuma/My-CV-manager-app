<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('experiences', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Link to the user
            $table->foreignId('cv_id')->constrained()->onDelete('cascade'); // Link to the user
            $table->string('title'); // Job title
            $table->string('company'); // Company name
            $table->text('description')->nullable(); // Job description
            $table->date('start_date'); // Start date
            $table->date('end_date')->nullable(); // End date (nullable for current roles)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('experiences');
    }
};
