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
    public function lists($request);

    /**
     * @param int $id
     * @return mixed
     */
    // public function findBrandById(int $id);

    /**
     * @param array $params
     * @return mixed
     */
    // public function create(array $params);

    /**
     * @param array $params
     * @return mixed
     */
    // public function update(array $params);

    /**
     * @param $id
     * @return bool
     */
    // public function delete($id);
}
