# Label OCI Console

Add a color coded banner to the top of the console to distinguish between tenancies (prod/dev/stage/personal).

# Tenancies

The tenancy list is maintained in the `tenancies` object. Edit the members as required.
```javascript
  const tenancies = {
    personal: new Set(["replace_with_personal_tenancy_name"]),
    prod: new Set([
      "replace_with_prod_tenancy_name_1",
      "replace_with_prod_tenancy_name_2",
    ]),
    stage: new Set([
      "replace_with_stage_tenancy_name_1",
      "replace_with_stage_tenancy_name_2"
    ]),
    dev: new Set([
      "replace_with_dev_tenancy_name_1",
      "replace_with_dev_tenancy_name_2"
    ]),
  };
```

# Screenshots

### Personal

![Personal tenancy](../images/personal_tenancy.png)

### Dev/Test/Stage

![Dev tenancy](../images/dev_tenancy.png)

### Production

![Prod tenancy](../images/prod_tenancy.png)
