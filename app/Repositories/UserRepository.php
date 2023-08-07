<?php 

namespace App\Repositories;

use App\Interfaces\UserInterface;

class UserRepository implements UserInterface
{
    public function create($data)
    {
        return 'create';
    }
}