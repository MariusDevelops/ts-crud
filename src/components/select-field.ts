// 2.1.1. Sukurkite komponentą SelectField, skirtą pasirinkti automobilių markei
// Pirmiausiai įgalinkite atvaizdavimą, kuris rodytų bet kokius 3 pasirinkimus naudojant < select >
// Išanalizuokite kokių parametrų reikia, kad suformuoti pasirinkimą? Kelis pasirinkimus?
// Perduokite masyvą tokių pasirinkimų formuojat komponentą (konstruktoriui)
// Naudojant konstruktoriaus parametrus priimkite funkciją,
// kurią iškviesite pasikeitus < select > reikšmei
// Panaudokite SelectField komponentą App klasėje ir prijunkite jį virš lentelės

type OptionType = {
  title: string,
  value: string,
};

export type SelectFieldProps = {
  labelText: string,
  onChange: (newValue: string) => void,
  options: OptionType[],
};

class SelectField {
  private static uniqId = 0;

  private props: SelectFieldProps;

  private htmlSelectElement: HTMLSelectElement;

  public htmlElement: HTMLDivElement;

  constructor(props: SelectFieldProps) {
    this.props = props;

    SelectField.uniqId += 1;
    this.htmlElement = document.createElement('div');

    this.initialize();
  }

  private initialize = (): void => {
    const elementId = `select-${SelectField.uniqId}`;

    this.htmlSelectElement.className = 'form-select';
    this.htmlSelectElement.id = elementId;

    this.htmlElement.className = 'form-group';
    this.htmlElement.append(
      this.htmlSelectElement,
    );
  };
}

export default SelectField;
