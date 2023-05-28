import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptosService } from '../../../../services/cryptos.service';

import { ChartOptions, ChartDataset } from 'chart.js';

type Label = string;

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.scss'],
})
export class CryptoDetailsComponent implements OnInit {
  id: string | null = null;
  crypto: any = null;

  public lineChartData: ChartDataset<'line'>[] = [
    {
      data: [],
      label: 'Price',
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
  };
  public lineChartColors = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];

  public lineChartLegend = true;
  public lineChartType: string = 'line';
  public lineChartPlugins = [];

  constructor(
    private route: ActivatedRoute,
    private cryptosService: CryptosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id === null) {
      // If 'id' doesn't exist, redirect to a default page (e.g., the cryptos list page)
      this.router.navigate(['/cryptos']);
    } else {
      this.cryptosService.getCryptoById(this.id).subscribe(
        (crypto) => {
          this.crypto = crypto;
          this.lineChartLabels = this.crypto.market_data.sparkline_7d.price.map(
            (_: any, index: { toString: () => any }) => index.toString()
          );
          this.lineChartData[0].data =
            this.crypto.market_data.sparkline_7d.price;
        },
        (error) => {
          console.error('Error fetching crypto details', error);
        }
      );
      this.cryptosService
        .getCryptoMarketChartById(this.id)
        .subscribe((chartData: any) => {
          this.lineChartLabels = chartData.prices.map((_: any, index: number) =>
            index.toString()
          );
          this.lineChartData[0].data = chartData.prices.map(
            (price: any[]) => price[1]
          );
        });
    }
  }
}
