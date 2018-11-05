/**
 * Blocks for driving Opinsys:Nalle Board
 */
//% weight=100 color=#00000 icon="f004" block="Opinsys:Nalle"
namespace opinsys_nalle {

	/************************************************************************************************************************************************
	* micro:bit Opinsys:Nalle
	************************************************************************************************************************************************/

    /*some parameters used for controlling the turn and length of the ServoLite board controlled :MOVE mini */
    const microSecInASecond = 1000000
    let distancePerSec = 100
    let numberOfDegreesPerSec = 200

    /**
     * Drives forwards. Call stop to stop
     */
    //% blockId=opinsys_nalle_tassut_ylos
    //% block="tassut ylös"
    export function tassutYlos(): void {
        pins.servoWritePin(AnalogPin.P1, 0);
        pins.servoWritePin(AnalogPin.P2, 180);
    }

    /**
     * Drives backwards. Call stop to stop
     */
    //% blockId=opinsys_nalle_tassut_alas
    //% block="tassut alas"
    export function backward(): void {
        pins.servoWritePin(AnalogPin.P1, 180);
        pins.servoWritePin(AnalogPin.P2, 0);
    }

    /**
	* Turns left. Call stop to stop
	*/
    //% blockId=kitronik_servolite_servos_left
    //% block="turn left"
    export function left(): void {
        pins.servoWritePin(AnalogPin.P1, 0);
        pins.servoWritePin(AnalogPin.P2, 0);
    }

	/**
	 * Turns right. Call ``stop`` to stop
	 */
    //% blockId=kitronik_servolite_servos_right
    //% block="turn right"
    export function right(): void {
        pins.servoWritePin(AnalogPin.P1, 180);
        pins.servoWritePin(AnalogPin.P2, 180);
    }

	/**
	 * Stop for 360 servos.
	 * rather than write 90, which may not stop the servo moving if it is out of trim
	 * this stops sending servo pulses, which has the same effect.
	 * On a normal servo this will stop the servo where it is, rather than return it to neutral position.
	 * It will also not provide any holding force.
     */
    //% blockId=kitronik_servolite_servos_stop
    //% block="stop"
    export function stop(): void {
        pins.analogWritePin(AnalogPin.P1, 0);
        pins.analogWritePin(AnalogPin.P2, 0);
    }

	/**
	 * Sends servos to 'neutral' position.
	 * On a well trimmed 360 this is stationary, on a normal servo this is 90 degrees.
     */
    //% blockId=kitronik_servolite_servos_neutral
    //% block="goto neutral position"
    export function neutral(): void {
        pins.servoWritePin(AnalogPin.P1, 90);
        pins.servoWritePin(AnalogPin.P2, 90);
    }
}
