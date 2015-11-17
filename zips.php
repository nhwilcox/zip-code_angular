<?php

    $populations = file_get_contents("zipcodespopulation.json");

    $decoded_pops = json_decode($populations, true);

    $zips = file_get_contents("zipcodes.json");

    $decoded_zips = json_decode($zips, true);

    foreach ($decoded_zips as $key => $value) {
        $zipCode = $value['Zipcode'];
        $city = $value['City'];
        $state = $value['State'];

        foreach ($decoded_pops as $key => $value) {
          if ($value['Zip Code ZCTA'] == $zipCode) {
            echo "population of " . $zipCode . " " . $city . " " . $state . " " .
                $value['Zip Code ZCTA'] ." " . $value['2010 Census Population'] . "\n";
            break;
          }
        }
    }

  ?>