const AlertService = new AlertService();
const CalculatorService = new CalculatorService();
const JokesService = new JokesService();

const run = (AlertService, CalculatorService, JokesService) => {
    AlertService.sembunyikanError

    CalculatorService.onClick(() => {
        AlertService.sembunyikanError();
        const input = CalculatorService.getInput();
        const angka = perseInput(...input);
        if (cekInputValid(...angka)) {
            const [angka1, angka2] = angka;
            CalculatorService.setResult(angka1, angka2);        
    } else {
        CalculatorService.setResult('');
        AlertService.tampilkanErrorPenjumlahan(input, angka);
    }
});

JokesService.onClick(() => {
    fetch('https://candaan-api.vercel.app/api/text/random')
    .then((response) => response.json())
    .then((data) => {
        JokesService.setModal(data.data);
    });
  });
};

module.export = run;