import { TimeZone } from '../../app/shared/models/timezone.enum';

export const convertTimeZoneToIanaFormat: Function = (timeZone: TimeZone): string => {
  switch (timeZone) {
    case TimeZone.AlaskaTime:
      return 'US/Alaska';
    case TimeZone.CentralTime:
      return 'US/Central';
    case TimeZone.EasternTime:
      return 'US/Eastern';
    case TimeZone.HawaiiAleutianTime:
      return 'US/Hawaii';
    case TimeZone.MountainTime:
      return 'US/Mountain';
    case TimeZone.PacificTime:
      return 'US/Pacific';
    default:
      return undefined;
  }
};
