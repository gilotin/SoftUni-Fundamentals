function gramophone(bandName, albumName, songName) {
    let songDuratation = (albumName.length * bandName.length) * songName.length / 2;
    let rotations = Math.ceil(songDuratation / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');