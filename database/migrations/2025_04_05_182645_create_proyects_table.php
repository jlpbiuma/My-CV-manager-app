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
        Schema::create('proyects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Link to the user
            $table->foreignId('cv_id')->constrained()->onDelete('cascade'); // Link to the CV
            $table->string('title'); // Project title
            $table->text('description')->nullable(); // Project description
            $table->string('technologies')->nullable(); // Technologies used
            $table->date('start_date'); // Start date
            $table->date('end_date')->nullable(); // End date (nullable for ongoing projects)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyects');
    }
};
