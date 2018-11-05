/**
 * Blocks for driving Opinsys:Nalle Board
 */
//% weight=100 color=#00000 block="Opinsys:Nalle"
namespace opinsys_nalle {

	/************************************************************************************************************************************************
	* micro:bit Opinsys:Nalle
	************************************************************************************************************************************************/


    /**
     * Drives forwards. Call stop to stop
     */
    //% blockId=opinsys_nalle_tassut_alas
    //% block="tassut alas"
    export function tassutAlas(): void {
        pins.servoWritePin(AnalogPin.P1, 0);
        pins.servoWritePin(AnalogPin.P2, 180);
    }

    /**
     * Drives backwards. Call stop to stop
     */
    //% blockId=opinsys_nalle_tassut_ylos
    //% block="tassut ylös"
    export function tassutYlos(): void {
        pins.servoWritePin(AnalogPin.P1, 180);
        pins.servoWritePin(AnalogPin.P2, 0);
    }

    //% blockId=opinsys_nalle_tassut_eteen
    //% block="tassut eteen"
    export function tassutEteen(): void {
        pins.servoWritePin(AnalogPin.P1, 90);
        pins.servoWritePin(AnalogPin.P2, 90);
    }
}
