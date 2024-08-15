package org.fleximart.fleximart.v1.repository.product;

import org.fleximart.fleximart.v1.entity.product.VariantGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.fleximart.fleximart.v1.entity.product.VariantOption;

import java.util.List;

@Repository
public interface VariantGroupRepository extends JpaRepository<VariantGroup, Long> {
    @Query("SELECT DISTINCT vg FROM VariantGroup vg JOIN vg.variantOptions vo WHERE vo IN :variantOptions")
    List<VariantGroup> findByVariantOptions(@Param("variantOptions") List<VariantOption> variantOptions);
}
