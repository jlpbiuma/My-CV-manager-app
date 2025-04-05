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
        Schema::create('estudios', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Link to the user
            $table->foreignId('cv_id')->constrained()->onDelete('cascade'); // Link to the CV
            $table->string('institution'); // Institution name
            $table->string('degree'); // Degree or certification
            $table->text('description')->nullable(); // Description of the education
            $table->date('start_date'); // Start date
            $table->date('end_date')->nullable(); // End date (nullable for ongoing education)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('estudios');
    }
};
