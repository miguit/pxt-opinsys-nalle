//% weight=100 color=cccccc block="Opinsys:Nalle"
namespace opinsys_nalle {

	/************************************************************************************************************************************************
	* micro:bit Opinsys:Nalle
	************************************************************************************************************************************************/


    /**
     * Drives nalles hands down
     */
    //% blockId=opinsys_nalle_tassut_alas
    //% block="tassut alas"
    export function tassutAlas(): void {
        pins.servoWritePin(AnalogPin.P1, 0);
        pins.servoWritePin(AnalogPin.P2, 180);
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