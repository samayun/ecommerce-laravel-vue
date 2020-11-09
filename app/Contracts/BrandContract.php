<?php

namespace App\Contracts;

/**
 * Interface BrandContract
 * @package App\Contracts
 */
interface BrandContract
{
    /**
     * @param string $orderBy
     * @param string $sortBy
     * @param array $columns
     * @return mixed
     */
    // string $orderBy = 'id', string $sortBy = 'desc', array $columns = ['*']
    // {"page":"1","perPage":"10","orderBy":"created_at","sortBy":"desc"}
    public function lists();

    /**
     * @param int $id
     * @return mixed
     */
    // public function findById(int $id);

    /**
     * @param array $params
     * @return mixed
     */
    public function create(array $params);

    /**
     * @param array $params
     * @return mixed
     */
    public function update(array $params,int $id);

    /**
     * @param $id
     * @return bool
     */
    public function delete(int $id);
}
