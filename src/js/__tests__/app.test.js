import { Magician, Daemon } from '../app';

describe('Magician and Daemon Classes', () => {
  it('should calculate attack without stoning for Magician', () => {
    const magician = new Magician(2);
    expect(magician.attack).toBe(80);
  });

  it('should calculate attack with stoning for Magician', () => {
    const magician = new Magician(2);
    magician.stoned = true;
    expect(magician.attack).toBe(75);
  });

  it('should calculate attack without stoning for Daemon', () => {
    const daemon = new Daemon(3);
    expect(daemon.attack).toBe(60);
  });

  it('should calculate attack with stoning for Daemon', () => {
    const daemon = new Daemon(3);
    daemon.stoned = true;
    expect(daemon.attack).toBeCloseTo(52.07, 1);
  });
});
