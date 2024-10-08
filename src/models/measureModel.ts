import { IMeasureModel } from '../Interfaces/Measures/IMeasureModel';
import { Measure } from '../Interfaces/Measures/MeasureType';
import SequelizeMeasures from '../database/models/MeasureModel';

export default class MeasureModel implements IMeasureModel {
  private model = SequelizeMeasures;

  async createMeasure(measure: Measure): Promise<Measure> {
    const createdMeasure = await this.model.create(measure);
    return createdMeasure.dataValues;
  }

  async findByPk(measureUuid: string): Promise<Measure | null> {
    const measure = await this.model.findByPk(measureUuid);
    return measure ? measure.dataValues : null;
  }

  async confirmMeasure(measure: Measure, confirmedValue: number): Promise<Measure> {
    measure.measureValue = confirmedValue;
    measure.hasConfirmed = true;
    await this.model.update(measure, { where: { uuid: measure.uuid } });
    return measure;
  }
  
  async getCustomerMeasures(query: any): Promise<Measure[]> {
    const measures = await this.model.findAll({ where: query });
    return measures.map((measure) => measure.dataValues);
  }
  


}