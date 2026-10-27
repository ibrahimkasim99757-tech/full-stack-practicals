function StudentAttendance({ attendance }) {
  return (
    <div>
      <h3>Attendance</h3>

      <p>{attendance}%</p>

      {attendance >= 75 ? (
        <p style={{ color: "green" }}>
          Present / Eligible
        </p>
      ) : (
        <p style={{ color: "red" }}>
          Low Attendance / Not Eligible
        </p>
      )}
    </div>
  );
}

export default StudentAttendance;
