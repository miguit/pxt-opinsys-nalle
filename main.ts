enum degreeName {
    //% block=Ylos
    Ylos = 0,
    //% block=Alas
    Alas = 180,
    //% block=Eteen
    Eteen = 90
}

//% //% weight=5 color=#2699BF icon="\uf1b0" block="Opinsys:Nalle"
namespace opinsys_nalle {

    export class Nalle {

        /************************************************************************************************************************************************
        * micro:bit Opinsys:Nalle
        ************************************************************************************************************************************************/
        /**
      * Shows all LEDs to a given color (range 0-255 for r, g, b). 
      * @param degree RGB color of the LED
      */
        //% blockId="opinsys_nalle_asteet" block="%nalle|asteet %degree=degreeName" 
        //% weight=85 blockGap=8
        setDegree(degree: number) {
            degree = degree >> 0;
        }
    }

    export function degree(degree: number): number {
        return degree(degree);
    }
    /**
     * Drives nalles hands down
     */
    //% blockId=opinsys_nalle_tassut_alas
    //% block="tassut alas"
    export function tassutAlas(): void {
        pins.servoWritePin(AnalogPin.P1, 0);
        pins.servoWritePin(AnalogPin.P2, 180);
    }
    //% blockId=opinsys_nalle_tassu_asteet
    //% block="tassu asteet"
    export function tassutAsteet(number: degreeName) {
        pins.servoWritePin(AnalogPin.P1, degreeName);
        pins.servoWritePin(AnalogPin.P2, degreeName);
    }

    /**
     * Drives nalles hands up
     */
    //% blockId=opinsys_nalle_tassut_ylos
    //% block="tassut ylös"
    export function tassutYlos(): void {
        pins.servoWritePin(AnalogPin.P1, 180);
        pins.servoWritePin(AnalogPin.P2, 0);
    }

    /**
     * Drives servos to 90 deg angle
     */
    //% blockId=opinsys_nalle_tassut_eteen
    //% block="tassut eteen"
    export function tassutEteen(): void {
        pins.servoWritePin(AnalogPin.P1, 90);
        pins.servoWritePin(AnalogPin.P2, 90);
    }
}